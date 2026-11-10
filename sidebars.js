// @ts-check

// The sidebar is explicit: labels and grouping are independent of the file paths.
// Page URLs (folder + id) must stay stable: the app opens
//   https://doc.mocpilot.com/?lang=<code>&path=<path>
// for Introducing/QuickStart, Introducing/SupportedDevices, Application/Hubs/FirmwareUpdating,
// Application/BlockBuilder/Blocks/BlocksIntroducing and Application/Links/LinksIntroducing,
// and mocpilot.com links to /docs/Introducing/AboutApp and both editor pages.

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting started',
      key: 'getting-started',
      collapsed: false,
      items: [
        'Introducing/AboutApp',
        'Introducing/HowItWorks',
        'Introducing/QuickStart',
        'Introducing/Layouts',
        'Introducing/SupportedDevices',
        'Introducing/WebEditor',
      ],
    },
    {
      type: 'category',
      label: 'Profiles',
      key: 'profiles',
      items: [
        'Application/Profiles/ProfilesOverview',
        'Application/Profiles/CreateProfile',
        'Application/Profiles/ManageProfiles',
        'Application/Profiles/Catalog',
        'Application/Profiles/PlayMode',
      ],
    },
    {
      type: 'category',
      label: 'Dashboard',
      key: 'dashboard',
      items: [
        'Application/Dashboard/DashboardOverview',
        'Application/Dashboard/ArrangingControls',
        'Application/Dashboard/ControlTypes',
        'Application/Dashboard/ControlProperties',
        'Application/Dashboard/Indicators',
        'Application/Dashboard/Gamepad',
        'Application/Dashboard/PhoneSensors',
      ],
    },
    {
      type: 'category',
      label: 'Themes',
      key: 'themes',
      items: [
        'Application/Themes/ThemesOverview',
        'Application/Themes/LayeredThemes',
        'Application/Themes/GettingThemes',
        'Application/Themes/CreatingControls',
      ],
    },
    {
      type: 'category',
      label: 'Quick Links',
      key: 'quick-links',
      items: [
        'Application/Links/LinksIntroducing',
        'Application/Links/Inputs',
        'Application/Links/Processing',
        'Application/Links/Operations',
        'Application/Links/HubsAndPorts',
        'Application/Links/Problems',
        'Application/Links/Examples',
      ],
    },
    {
      type: 'category',
      label: 'Logic Blocks',
      key: 'logic-blocks',
      items: [
        'Application/BlockBuilder/Blocks/BlocksIntroducing',
        'Application/BlockBuilder/Editor',
        'Application/BlockBuilder/Examples',
        {
          type: 'category',
          label: 'Block reference',
          key: 'block-reference',
          items: [
            'Application/BlockBuilder/Blocks/Events',
            'Application/BlockBuilder/Blocks/Control',
            'Application/BlockBuilder/Blocks/Operators',
            'Application/BlockBuilder/Blocks/Variables',
            'Application/BlockBuilder/Blocks/Lists',
            'Application/BlockBuilder/Blocks/MyBlocks',
            'Application/BlockBuilder/Blocks/Motors',
            'Application/BlockBuilder/Blocks/Light',
            'Application/BlockBuilder/Blocks/Sensors',
            'Application/BlockBuilder/Blocks/DashboardControllers',
            'Application/BlockBuilder/Blocks/Gamepad',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Hubs',
      key: 'hubs',
      items: [
        'Application/Hubs/HubsOverview',
        'Application/Hubs/ConnectingHubs',
        'Application/Hubs/HubFunctions',
        'Application/Hubs/FirmwareUpdating',
        'Application/Hubs/RecoveryHubFirmware',
        'Application/Hubs/TechnicMoveHubConfigurations',
      ],
    },
    {
      type: 'category',
      label: 'Account and MocPilot Pro',
      key: 'account',
      items: [
        'Application/Account/UserAccount',
        'Application/Account/Sync',
        'Application/Account/Pro',
        'Application/Account/Settings',
      ],
    },
    {
      type: 'category',
      label: 'Help',
      key: 'help',
      items: ['Help/Troubleshooting', 'Help/FAQ'],
    },
  ],
};

export default sidebars;
