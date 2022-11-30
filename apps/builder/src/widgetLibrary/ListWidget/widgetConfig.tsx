import { ReactComponent as ListWidgetIcon } from "@/assets/widgetCover/list.svg"
import { WidgetConfig } from "@/widgetLibrary/interface"
import i18n from "@/i18n/config"
import { OVERFLOW_TYPE } from "@/widgetLibrary/ListWidget/interface"
import { BasicContainerConfig } from "@/widgetLibrary/BasicContainer/BasicContainer"
import { TEXT_WIDGET_CONFIG } from "@/widgetLibrary/TextWidget"
import { IMAGE_WIDGET_CONFIG } from "@/widgetLibrary/ImageWidget"
import { BUTTON_WIDGET_CONFIG } from "@/widgetLibrary/ButtonWidget"
import { v4 } from "uuid"

export const LIST_WIDGET_CONFIG: WidgetConfig = {
  type: "LIST_WIDGET",
  displayName: "list",
  widgetName: i18n.t("widget.list.name"),
  keywords: ["list", "列表"],
  icon: <ListWidgetIcon />,
  sessionType: "PRESENTATION",
  w: 32,
  h: 40,
  childrenNode: [
    {
      ...BasicContainerConfig,
      childrenNode: [
        {
          ...TEXT_WIDGET_CONFIG,
          w: 10,
          h: 5,
          x: 19,
          y: 2,
          defaults: {
            ...TEXT_WIDGET_CONFIG.defaults,
            value:
              "{{templateDisplayName.dataSources.map((currentItem) => ('# ' + currentItem.name))}}",
            $dynamicAttrPaths: ["value"],
          },
        },
        {
          ...TEXT_WIDGET_CONFIG,
          w: 30,
          h: 5,
          x: 19,
          y: 13,
          defaults: {
            ...TEXT_WIDGET_CONFIG.defaults,
            value:
              "{{templateDisplayName.dataSources.map((currentItem) => (currentItem.email))}}",
            $dynamicAttrPaths: ["value"],
          },
        },
        {
          ...IMAGE_WIDGET_CONFIG,
          w: 14,
          h: 20,
          x: 1,
          y: 1,
          defaults: {
            ...IMAGE_WIDGET_CONFIG.defaults,
            imageSrc:
              "{{templateDisplayName.dataSources.map((currentItem) => (currentItem.img))}}",
            $dynamicAttrPaths: ["imageSrc"],
          },
        },
        {
          ...BUTTON_WIDGET_CONFIG,
          w: 16,
          h: 5,
          x: 47,
          y: 6,
          defaults: {
            ...BUTTON_WIDGET_CONFIG.defaults,
            text: "Show notification",
            events: [
              {
                actionType: "showNotification",
                id: v4(),
                eventType: "click",
                title:
                  "{{templateDisplayName.dataSources.map((currentItem) => (currentItem.name))}}",
                description:
                  "{{templateDisplayName.dataSources.map((currentItem) => (currentItem.email))}}",
                notificationType: "success",
              },
            ],
            $dynamicAttrPaths: ["events.0.title", "events.0.description"],
          },
        },
      ],
    },
  ],
  defaults: {
    overflowMethod: OVERFLOW_TYPE.SCROLL,
    pageSize: "{{6}}",
    itemBackGroundColor: "white",
    backgroundColor: "white",
    itemHeight: 203,
    dataSources: `{{[
  {
    "name": "user1",
    "email": "user1@illasoft.com",
    "img": "https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
  },
  {
    "name": "user2",
    "email": "user2@illasoft.com",
    "img": "https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
  },
  {
    "name": "user3",
    "email": "user3@illasoft.com",
    "img": "https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
  }
]}}`,
  },
}
