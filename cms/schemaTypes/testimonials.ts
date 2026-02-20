import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'testimonialsList',
      title: 'Testimonials List',
      type: 'array',
      of: [
        {
          name: 'testimonial',
          type: 'object',
          fields: [
            defineField({
              name: 'review',
              title: 'Review',
              type: 'text',
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'account',
              title: 'Account/Title',
              type: 'string',
            }),
            defineField({
              name: 'pict',
              title: 'Picture',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'featured',
              title: 'Featured',
              type: 'boolean',
            }),
          ],
        },
      ],
    }),
  ],
})
