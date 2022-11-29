import { FC, useContext, useMemo } from "react"
import { useSelector } from "react-redux"
import { Select } from "@illa-design/react"
import { applyBaseSelectWrapperStyle } from "@/page/App/components/PanelSetters/SelectSetter/style"
import { BaseSelectSetterProps } from "./interface"
import { getActionList } from "@/redux/currentApp/action/actionSelector"
import { SelectedPanelContext } from "@/page/App/components/InspectPanel/context/selectedContext"
import { getCachedAction } from "@/redux/config/configSelector"

export const EventTargetActionSelect: FC<BaseSelectSetterProps> = (props) => {
  const { isSetterSingleRow, attrName, handleUpdateDsl, value } = props

  const actionList = useSelector(getActionList)

  const selectedContext = useContext(SelectedPanelContext)
  const selectedAction = useSelector(getCachedAction)

  const actionOptions = useMemo(() => {
    if (selectedContext.widgetOrAction === "ACTION") {
      return actionList
        .filter((value) => {
          return value.displayName !== selectedAction?.displayName
        })
        .map((item) => item.displayName)
    }
    if (selectedContext.widgetOrAction === "WIDGET") {
      return actionList.map((item) => {
        return item.displayName
      })
    }
    return []
  }, [actionList, selectedAction?.displayName, selectedContext.widgetOrAction])

  return (
    <div css={applyBaseSelectWrapperStyle(isSetterSingleRow)}>
      <Select
        options={actionOptions}
        size="medium"
        colorScheme="techPurple"
        value={value}
        onChange={(value) => {
          handleUpdateDsl(attrName, value)
        }}
      />
    </div>
  )
}
