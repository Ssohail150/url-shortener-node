import validator from "validator";

import urlRepository from "../repositories/url.repository.js";

import { generateShortCode } from "../utils/shortener.js";

class UrlService {
  async createShortURL(originalUrl) {
    if (!validator.isURL(originalUrl)) {
      throw new Error("Invalid URL");
    }

    const existing = await urlRepository.findByOriginalUrl(originalUrl);

    if (existing) {
      return existing;
    }

    const shortCode = generateShortCode();

    const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

    const url = await urlRepository.create({
      originalUrl,
      shortCode,
    });

    return url;
  }

  async getOriginalURL(code) {
    const url = await urlRepository.findByCode(code);

    if (!url) {
      throw new Error("URL Not Found");
    }

    return url.originalUrl;
  }

  async getRecentURLs() {
    return urlRepository.getRecent();
  }

  async incrementClicks(code) {
    return urlRepository.incrementClicks(code);
  }

  async deleteURL(id) {
    const deleted = await urlRepository.deleteById(id);

    if (!deleted) {
      throw new Error("URL not found");
    }

    return deleted;
  }
}

export default new UrlService();
