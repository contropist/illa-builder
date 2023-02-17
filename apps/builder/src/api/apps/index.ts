import { BuilderApi, CloudApi } from "@/api/base"
import {
  fetchInviteLinkResponse,
  inviteByEmailResponse,
} from "@/illa-public-component/MemberList/interface"
import { USER_ROLE } from "@/illa-public-component/UserRoleUtils/interface"

export interface fetchShareAppLinkResponse {
  appID: number
  teamID: number
  userRole: USER_ROLE
  shareAppLink: string
}

export const shareAppByEmail = (
  email: string,
  userRole: USER_ROLE,
  appID: string,
) => {
  return new Promise<inviteByEmailResponse>((resolve, reject) => {
    CloudApi.teamRequest<inviteByEmailResponse>(
      {
        method: "POST",
        url: `/shareAppByEmail`,
        data: {
          email,
          userRole,
          appID,
        },
      },
      (res) => {
        resolve(res.data)
      },
      (res) => {
        reject(false)
      },
      () => {
        reject(false)
      },
    )
  })
}

export const fetchShareAppLink = (userRole: USER_ROLE, appID: string) => {
  return new Promise<fetchInviteLinkResponse>((resolve, reject) => {
    CloudApi.teamRequest<fetchInviteLinkResponse>(
      {
        method: "GET",
        url: `/shareAppLink/userRole/${userRole}/apps/${appID}`,
      },
      (res) => {
        resolve(res.data)
      },
      (res) => {
        reject(false)
      },
      () => {
        reject(false)
      },
    )
  })
}

export const renewShareAppLink = (userRole: USER_ROLE, appID: string) => {
  return new Promise<fetchInviteLinkResponse>((resolve, reject) => {
    CloudApi.teamRequest<fetchInviteLinkResponse>(
      {
        method: "GET",
        url: `/newShareAppLink/userRole/${userRole}/apps/${appID}`,
      },
      (res) => {
        resolve(res.data)
      },
      (res) => {
        reject(false)
      },
      () => {
        reject(false)
      },
    )
  })
}

export const updateAppPublicConfig = (isPublic: boolean, appID: string) => {
  return new Promise<boolean>((resolve, reject) => {
    BuilderApi.teamRequest<fetchInviteLinkResponse>(
      {
        method: "PATCH",
        url: `/apps/${appID}/config`,
        data: {
          public: isPublic,
        },
      },
      () => {
        resolve(true)
      },
      () => {
        reject(false)
      },
      () => {
        reject(false)
      },
    )
  })
}
