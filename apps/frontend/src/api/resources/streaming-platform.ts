import { AxiosInstance } from "axios";
import { StreamingPlatform} from "firebot-types"

export type StreamingPlatformIdName = Pick<StreamingPlatform, "id" | "name" | "icon" | "auth">;

export class StreamingPlatformApi { 
  constructor(private readonly api: AxiosInstance) {}

  async getStreamingPlatforms(): Promise<StreamingPlatformIdName[]> {
    const response = await this.api.get<StreamingPlatformIdName[]>("/streaming-platform");
    return response.data;
  }
}