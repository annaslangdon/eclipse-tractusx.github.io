/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'developer',
      {
          type: 'category',
          label: 'Release Guidelines',
          link: {
              type: 'doc',
              id: 'release'
          },
          collapsed: true,
          items: [
              {
                  type: 'autogenerated',
                  dirName: 'release',
              },
          ],
      },
      {
          type: 'category',
          label: 'KIT Guidelines',
          link: {
              type: 'doc',
              id: 'kit-process/graduation-process'
          },
          collapsed: true,
          items: [
              {
                  type: 'autogenerated',
                  dirName: 'kit-process',
              },
          ],
      },{
        type: 'category',
        label: 'Website Guidelines',
        link: {
            type: 'doc',
            id: 'website-guidelines/dev_faq'
        },
        collapsed: true,
        items: [
            {
                type: 'autogenerated',
                dirName: 'website-guidelines',
            },
        ],
    },
      {
          type: 'category',
          label: 'Open Source Development',
          link: {
              type: 'generated-index',
          },
          collapsed: true,
          items: [
              {
                  type: 'autogenerated',
                  dirName: 'oss',
              },
          ],
      },
      'github-checks',
      'dev_links'
  ],
};

module.exports = sidebars;
