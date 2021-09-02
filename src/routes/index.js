/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: King Etiosasere, 30th August 2021
* */

import { Router } from 'express'
import reminderController from '@controllers/reminder.controller'
import errorController from '@controllers/conflictError.controller'

const router = Router()

router.get('/ping', (req, res) =>
	res.json({ message: 'Hello! You have found the zc_plugin_reminder api' })
)
router.route('/reminders').get(reminderController.create)

router.get('/conflictError', errorController)

export default router
