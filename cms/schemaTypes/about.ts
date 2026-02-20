import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'text',
    }),
    defineField({
      name: 'teams',
      title: 'Teams',
      type: 'array',
      of: [
        {
          name: 'teamMember',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
            }),
            defineField({
              name: 'pict',
              title: 'Picture URL',
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
      name: 'misionText',
      title: 'Mission Text',
      type: 'text',
    }),
    defineField({
      name: 'visionText',
      title: 'Vision Text',
      type: 'text',
    }),
    defineField({
      name: 'ilustration',
      title: 'Illustration URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us',
      type: 'array',
      of: [
        {
          name: 'whyChooseItem',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'text',
            }),
          ],
        },
      ],
    }),
  ],
})
