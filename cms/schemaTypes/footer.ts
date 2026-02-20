import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Company Name',
          type: 'string',
        }),
        defineField({
          name: 'shortDescription',
          title: 'Short Description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'productServices',
      title: 'Product & Services',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'content',
          title: 'Services',
          type: 'array',
          of: [
            {
              name: 'service',
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Service Name',
                  type: 'string',
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string',
        }),
        defineField({
          name: 'gmail',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'contactNumber',
          title: 'Contact Number',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          name: 'socialLink',
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'copyrigth',
      title: 'Copyright',
      type: 'string',
    }),
  ],
})
