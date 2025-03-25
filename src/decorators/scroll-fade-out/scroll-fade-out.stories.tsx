import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ScrollFadeOut } from './scroll-fade-out';
import Heading from '@/elements/heading/heading';

const meta: Meta<typeof ScrollFadeOut> = {
  title: 'Decorators/ScrollFadeOut',
  component: ScrollFadeOut,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A decorator component that fades out content as it scrolls out of the viewport.'
      }
    }
  },
  argTypes: {
    threshold: {
      control: { type: 'number', min: 0, max: 1, step: 0.1 },
      description: 'The threshold at which the fade effect starts.',
      defaultValue: 0.5
    },
    duration: {
      control: { type: 'number', min: 100, max: 2000, step: 100 },
      description: 'The duration of the fade effect in milliseconds.',
      defaultValue: 300
    }
  }
};

export default meta;
type Story = StoryObj<typeof ScrollFadeOut>;

export const Default: Story = {
  args: {
    threshold: 0.5,
    duration: 300
  },
  render: args => (
    <div style={{ height: '300vh', padding: '20px' }}>
      <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>
        👇 Scroll down to see the fade-out effect
      </p>

      <div style={{ height: '50vh', marginBottom: '20px' }}>
        <ScrollFadeOut {...args} testId='default-scroll-fade-1'>
          <div
            style={{
              padding: '30px',
              backgroundColor: '#f0f8ff',
              borderRadius: '8px',
              border: '1px solid #ccc',
              marginBottom: '20px'
            }}>
            <Heading level={1} testId='fade-heading-1'>
              This content will fade out
            </Heading>

            <p style={{ fontSize: '18px', lineHeight: 1.6 }}>
              As you scroll down, this entire section will gradually fade out.
              The fade effect is controlled by the intersection observer API,
              which tracks how much of this element is still visible in the
              viewport.
            </p>

            <div
              style={{
                height: '200px',
                backgroundColor: '#e6f7ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                marginTop: '20px'
              }}>
              <Heading level={2} testId='fade-heading-2'>
                Part of the fade effect
              </Heading>
            </div>
          </div>
        </ScrollFadeOut>

        <ScrollFadeOut {...args} testId='default-scroll-fade-2'>
          <div
            style={{
              padding: '30px',
              backgroundColor: '#fff0f5',
              borderRadius: '8px',
              border: '1px solid #ccc',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
            <Heading level={2} testId='fade-heading-3'>
              Also fades out
            </Heading>
            <p>This is still part of the same ScrollFadeOut component</p>
          </div>
        </ScrollFadeOut>
      </div>

      {/* Content outside of the ScrollFadeOut */}
      <div
        style={{
          padding: '30px',
          backgroundColor: '#f0fff0',
          borderRadius: '8px',
          border: '1px solid #ccc',
          marginTop: '50vh'
        }}>
        <Heading level={2} testId='non-fade-heading'>
          {"This content doesn't fade out"}
        </Heading>
        <p>
          {
            "This component is outside of the ScrollFadeOut decorator. You've now scrolled past the fade-out section completely."
          }
        </p>
      </div>
    </div>
  )
};

export const CustomThreshold: Story = {
  args: {
    threshold: 0.7,
    duration: 500
  },
  render: args => (
    <div style={{ height: '300vh', padding: '20px' }}>
      <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>
        👇 This example uses threshold: 0.7 (fades more gradually) and duration:
        500ms
      </p>

      <div style={{ height: '50vh', marginBottom: '20px' }}>
        <ScrollFadeOut {...args} testId='custom-threshold-fade'>
          <div
            style={{
              padding: '30px',
              backgroundColor: '#fff8dc',
              borderRadius: '8px',
              border: '1px solid #ccc'
            }}>
            <Heading level={1} testId='custom-fade-heading'>
              Custom Threshold Example
            </Heading>
            <p>
              With a higher threshold (0.7), the fade effect starts when more of
              the component is still visible in the viewport, creating a more
              gradual transition.
            </p>
            <div
              style={{
                height: '300px',
                backgroundColor: '#fffff0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px'
              }}>
              <p style={{ fontSize: '20px' }}>
                Scroll to see the difference in fade behavior
              </p>
            </div>
          </div>
        </ScrollFadeOut>
      </div>

      <div
        style={{
          padding: '30px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ccc',
          marginTop: '50vh'
        }}>
        <Heading level={2}>Non-fading content</Heading>
        <p>This content is outside of the ScrollFadeOut component.</p>
      </div>
    </div>
  )
};
