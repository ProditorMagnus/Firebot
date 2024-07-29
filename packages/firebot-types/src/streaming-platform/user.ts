import { Id } from "./helpers";

export interface UserRole {
    id: string;
    name: string;
    platformId: string;
}

export interface PlatformUser {
    id: Id;
    channelId?: Id;
    avatarUrl?: string;
    username: string;
    displayName: string;
    roles?: UserRole[];
    platformId: string;
}