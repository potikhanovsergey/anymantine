import { SimpleRolesIsAuthorized } from "@blitzjs/auth"
import { User } from "db"

export type Role = "ADMIN" | "USER"

declare module "@blitzjs/auth" {
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: User["id"]
      role: Role
    }
  }
}

// / <reference types="@legendapp/state/types" />

declare module "@legendapp/state/react" {
  export declare const Computed: (props: {
    children: React.ReactNode | (() => React.ReactNode)
  }) => React.ReactElement
  export declare const Memo: (props: {
    children: React.ReactNode | (() => React.ReactNode)
  }) => React.ReactElement
}
