import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'


const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

app.get('/drafts', async (req, res) => {
  const posts = await prisma.product.findMany({
    where: { published: false },
    include: { author: true }
  })
  res.json(posts)
})

app.get('/feed', async (req, res) => {
  const posts = await prisma.product.findMany({
    where: { published: true },
    include: { author: true }
  })
  res.json(posts)
})

app.get('/filterPosts', async (req, res) => {
  const { searchString }: { searchString?: string } = req.query;
  const filteredPosts = await prisma.product.findMany({
    where: {
      OR: [
        {
          name: {
            contains: searchString,
          },
        },
        {
          brand: {
            contains: searchString,
          },
        },
        {
          category: {
            contains: searchString,
          },
        },
        {
          country: {
            contains: searchString,
          },
        },
      ],
    },
  })
  res.json(filteredPosts)
})

app.post(`/product`, async (req, res) => {
  const { name, description, brand, category,country, authorEmail } = req.body
  const result = await prisma.product.create({
    data: {
      name,
      description,
      brand,
      category,
      country,
      published: false,
      author: { connect: { userId: authorEmail } },
    },
  })
  res.json(result)
})

app.delete(`/product/:id`, async (req, res) => {
  const { id } = req.params
  const product = await prisma.product.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(product)
})

app.get(`/product/:id`, async (req, res) => {
  const { id } = req.params
  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
    include: { author: true }
  })
  res.json(product)
})

app.put('/publish/:id', async (req, res) => {
  const { id } = req.params
  const product = await prisma.product.update({
    where: { id: Number(id) },
    data: { published: true },
  })
  res.json(product)
})

app.post(`/user`, async (req, res) => {
  const result = await prisma.user.create({
    data: {
      ...req.body,
    },
  })
  res.json(result)
})

const server = app.listen(3001, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3001',
  ),
)