import type { Meta, StoryObj } from '@storybook/react';
import { GridComponent } from '.';
import { Card, CardContent, ThemeProvider } from '@mui/material';
import { theme } from '../../theme';

const meta: Meta<typeof GridComponent> = {
  title: 'Example/Grid Component',
  component: GridComponent,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Card sx={{ minWidth: 600, width: '100%', borderRadius: 4 }}>
          <CardContent>
            <Story />
          </CardContent>
        </Card>
      </ThemeProvider>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PositionAt00South: Story = {
  args: {
    defaultValue: '0,0, SOUTH'
  }
};

export const PositionAt44West: Story = {
  args: {
    defaultValue: '4,4, WEST'
  }
};

export const InvalidDirection: Story = {
  args: {
    defaultValue: '2,2, WES'
  }
};

export const InvalidCoordinates: Story = {
  args: {
    defaultValue: 'A,1, SOUTH'
  }
};

export const CoordinatesOutOfRange: Story = {
  args: {
    defaultValue: '5,1, EAST'
  }
};
