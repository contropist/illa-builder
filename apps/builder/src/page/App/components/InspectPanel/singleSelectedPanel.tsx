import { FC, useCallback, useMemo } from "react"
import { Divider } from "@illa-design/react"
import { PanelHeader } from "@/page/App/components/InspectPanel/header"
import { SelectedProvider } from "@/page/App/components/InspectPanel/context/selectedContext"
import { panelBuilder } from "@/widgetLibrary/panelBuilder"
import { fieldFactory } from "./utils/fieldFactory"
import {
  singleSelectedPanelSetterWrapperStyle,
  singleSelectedPanelWrapperStyle,
} from "@/page/App/components/InspectPanel/style"
import { useDispatch, useSelector } from "react-redux"
import { getComponentNodeBySingleSelected } from "@/redux/currentApp/editor/components/componentsSelector"
import { componentsActions } from "@/redux/currentApp/editor/components/componentsSlice"
import { isObject } from "@/utils/typeHelper"

export const SingleSelectedPanel: FC = () => {
  const dispatch = useDispatch()

  const singleSelectedComponentNode = useSelector(
    getComponentNodeBySingleSelected,
  )

  const widgetType = singleSelectedComponentNode?.type || ""

  const widgetDisplayName = singleSelectedComponentNode?.displayName || ""

  const widgetParentDisplayName = singleSelectedComponentNode?.parentNode || ""

  const widgetProps = singleSelectedComponentNode?.props || {}

  const handleUpdateDsl = useCallback(
    (attrPath: string, value: any) => {
      const updateSlice = { [attrPath]: value }
      dispatch(
        componentsActions.updateComponentPropsReducer({
          displayName: widgetDisplayName,
          updateSlice,
        }),
      )
    },
    [dispatch, widgetDisplayName],
  )

  const handleUpdateMultiAttrDSL = useCallback(
    (updateSlice: Record<string, any>) => {
      if (!isObject(updateSlice)) return
      dispatch(
        componentsActions.updateComponentPropsReducer({
          displayName: widgetDisplayName,
          updateSlice,
        }),
      )
    },
    [dispatch, widgetDisplayName],
  )

  const handleUpdateOtherMultiAttrDSL = useCallback(
    (displayName: string, updateSlice: Record<string, any>) => {
      if (!displayName || !isObject(updateSlice)) return
      dispatch(
        componentsActions.updateComponentPropsReducer({
          displayName,
          updateSlice,
        }),
      )
    },
    [dispatch],
  )

  const builderPanelConfig = useMemo(() => {
    return panelBuilder(widgetType)
  }, [widgetType])

  return (
    builderPanelConfig && (
      <SelectedProvider
        widgetType={widgetType}
        widgetDisplayName={widgetDisplayName}
        widgetParentDisplayName={widgetParentDisplayName}
        widgetProps={widgetProps}
        handleUpdateDsl={handleUpdateDsl}
        handleUpdateMultiAttrDSL={handleUpdateMultiAttrDSL}
        handleUpdateOtherMultiAttrDSL={handleUpdateOtherMultiAttrDSL}
        widgetOrAction="WIDGET"
      >
        <div css={singleSelectedPanelWrapperStyle}>
          <PanelHeader />
          <Divider />
          <div css={singleSelectedPanelSetterWrapperStyle}>
            {fieldFactory(builderPanelConfig, widgetDisplayName)}
          </div>
        </div>
      </SelectedProvider>
    )
  )
}

SingleSelectedPanel.displayName = "SingleSelectedPanel"
