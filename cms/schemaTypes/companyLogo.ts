import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'companyLogo',
  title: 'Company Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})