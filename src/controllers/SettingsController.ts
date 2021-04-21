import { Request, Response } from "express";

import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(req: Request, res: Response) {
    const { username, chat } = req.body;
  
    const settingsService = new SettingsService();

    try {

      const settings = await settingsService.create({ chat, username });

      return res.json(settings);

    } catch (err) {

      return res.status(409).json({
        message: err.message
      });
      
    };
  };
};

export { SettingsController };
