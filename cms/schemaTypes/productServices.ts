import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'productServices',
  title: 'Product & Services',
  type: 'document',
  fields: [
    defineField({
      name: 'subContent',
      title: 'Sub Content',
      type: 'text',
    }),
    defineField({
      name: 'contentShort',
      title: 'Content Short',
      type: 'array',
      of: [
        {
          name: 'serviceShort',
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'ID',
              type: 'number',
            }),
            defineField({
              name: 'name',
              title: 'Service Name',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'image',
              title: 'Image URL',
              type: 'image',
              options: {
        hotspot: true,
      },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contentFull',
      title: 'Content Full',
      type: 'array',
      of: [
        {
          name: 'serviceFull',
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'ID',
              type: 'number',
            }),
            defineField({
              name: 'name',
              title: 'Service Name',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'list',
              title: 'Features List',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'image',
              title: 'Image URL',
              type: 'image',
              options: {
        hotspot: true,
      },
            }),
          ],
        },
      ],
    }),
  ],
})
