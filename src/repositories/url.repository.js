import Url from "../models/Url.js";

class UrlRepository {
  async create(data) {
    return Url.create(data);
  }

  async findByCode(code) {
    return Url.findOne({
      shortCode: code,
    });
  }

  async findByOriginalUrl(originalUrl) {
    return Url.findOne({
      originalUrl,
    });
  }

  async getRecent() {
    return Url.find().sort({
      createdAt: -1,
    });
  }

  async incrementClicks(code) {
    return Url.updateOne(
      {
        shortCode: code,
      },
      {
        $inc: {
          clicks: 1,
        },
      },
    );
  }
  async deleteById(id) {
    return Url.findByIdAndDelete(id);
  }
}

export default new UrlRepository();
