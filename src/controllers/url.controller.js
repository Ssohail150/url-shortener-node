import urlService from "../services/url.service.js";

import clickService from "../services/click.service.js";

export const createURL = async (req, res) => {
  try {
    const { url } = req.body;

    const result = await urlService.createShortURL(url);

    res.json({
      short_url: `${process.env.BASE_URL}/${result.shortCode}`,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export const redirectURL = async (req, res) => {
  try {
    const { code } = req.params;

    const original = await urlService.getOriginalURL(code);

    await clickService.trackClick(code, req.ip, req.get("user-agent"));

    await urlService.incrementClicks(code);

    res.redirect(original);
  } catch (error) {
    res.status(404).send("URL not found");
  }
};

export const getRecentURLs = async (req, res) => {
  const urls = await urlService.getRecentURLs();

  res.json(urls);
};

export const deleteURL = async (req, res) => {
  try {
    const { id } = req.params;

    await urlService.deleteURL(id);

    res.json({
      success: true,
      message: "URL deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
