import { css } from "@emotion/react"
import { globalColor, illaPrefix } from "@illa-design/react"

export function applyRecordEditorContainerStyle(label: string) {
  return css`
    display: flex;
    padding-right: ${label !== "" ? "16px" : "0"};
    flex-direction: row;
  `
}

export const recordEditorStyle = css`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

export const recordStyle = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
`

export const recordKeyStyle = css`
  min-width: 160px;
`

export const recordValueStyle = css`
  width: 0;
  flex-grow: 1;
  margin-left: -1px;
`

export const recordEditorLabelStyle = css`
  min-width: 160px;
  margin-left: 16px;
  margin-right: 16px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
`

export const deleteButtonStyle = css`
  flex-shrink: 0;
`

export const deleteIconStyle = css`
  color: ${globalColor(`--${illaPrefix}-grayBlue-05`)};
  &:hover {
    color: ${globalColor(`--${illaPrefix}-grayBlue-02`)};
    transition: color 200ms ease-in-out;
  }
`
