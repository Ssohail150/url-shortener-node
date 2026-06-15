import clickRepository from "../repositories/click.repository.js";

class ClickService {
  async trackClick(code, ip, userAgent) {
    return clickRepository.create({
      shortCode: code,
      ipAddress: ip,
      userAgent,
    });
  }
}

export default new ClickService();
