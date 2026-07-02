import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

class StorefrontService {
  async bootstrap() {
    const { data } = await api.get(ENDPOINTS.STORE.BOOTSTRAP);

    return data;
  }
}

export default new StorefrontService();
