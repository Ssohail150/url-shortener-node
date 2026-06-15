import Click from "../models/Click.js";

class ClickRepository {
  async create(data) {
    return Click.create(data);
  }

  async findByCode(code) {
    return Click.find({
      shortCode: code,
    }).sort({
      createdAt: -1,
    });
  }
}

export default new ClickRepository();
