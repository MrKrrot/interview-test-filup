import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.json({ message: 'Hello, Trainer!' }))
router.get('/:id', (req, res) => res.json({ message: `Hello, Trainer ${req.params.id}!` }))
router.post('/', (req, res) => res.json({ message: 'Trainer created!' }))
router.put('/:id', (req, res) => res.json({ message: `Trainer ${req.params.id} updated!` }))
router.delete('/:id', (req, res) => res.json({ message: `Trainer ${req.params.id} deleted!` }))

export default router
