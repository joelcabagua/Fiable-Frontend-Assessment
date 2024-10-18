import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { GridComponent } from '.';
import { Card, CardContent, ThemeProvider } from '@mui/material';
import { theme } from '../../theme';

const meta = {
  title: 'Example/Grid Component',
  component: GridComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    // onClick: fn()
  }
} satisfies Meta<typeof GridComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PositionAt00South: Story = {
  args: {
    value: '0,0, SOUTH'
  },
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Card sx={{ minWidth: 600, width: '100%', borderRadius: 4 }}>
        <CardContent>
          <GridComponent {...args} />
        </CardContent>
      </Card>
    </ThemeProvider>
  )
};

export const PositionAt44West: Story = {
  args: {
    value: '4,4, WEST'
  },
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Card sx={{ minWidth: 600, width: '100%', borderRadius: 4 }}>
        <CardContent>
          <GridComponent {...args} />
        </CardContent>
      </Card>
    </ThemeProvider>
  )
};

export const InvalidDirection: Story = {
  args: {
    value: '2,2, WES'
  },
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Card sx={{ minWidth: 600, width: '100%', borderRadius: 4 }}>
        <CardContent>
          <GridComponent {...args} />
        </CardContent>
      </Card>
    </ThemeProvider>
  )
};

export const InvalidCoordinates: Story = {
  args: {
    value: '5,1, WEST'
  },
  render: (args) => (
    <ThemeProvider theme={theme}>
      <Card sx={{ minWidth: 600, width: '100%', borderRadius: 4 }}>
        <CardContent>
          <GridComponent {...args} />
        </CardContent>
      </Card>
    </ThemeProvider>
  )
};
