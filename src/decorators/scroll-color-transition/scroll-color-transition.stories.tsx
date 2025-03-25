import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ScrollColorTransition } from './scroll-color-transition';
import Heading from '@/elements/heading/heading';

const meta: Meta<typeof ScrollColorTransition> = {
  title: 'Decorators/ScrollColorTransition',
  component: ScrollColorTransition,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A decorator component that transitions colors as content scrolls out of the viewport.'
      }
    }
  },
  argTypes: {
    threshold: {
      control: { type: 'number', min: 0.1, max: 1, step: 0.1 },
      description: 'The threshold at which the color transition starts.',
      defaultValue: 0.3
    },
    speed: {
      control: { type: 'number', min: 100, max: 2000, step: 100 },
      description: 'The duration of the color transition in milliseconds.',
      defaultValue: 300
    },
    fromColor: {
      control: 'color',
      description: 'The initial color before scrolling.',
      defaultValue: '#000000'
    },
    toColor: {
      control: 'color',
      description: 'The target color when scrolled.',
      defaultValue: '#cccccc'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ScrollColorTransition>;

export const Default: Story = {
  args: {
    threshold: 0.3,
    speed: 300,
    fromColor: '#000000',
    toColor: '#ff0000' // More noticeable color change
  },
  render: args => (
    <div style={{ height: '150vh', padding: '20px' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          padding: '10px',
          marginBottom: '20px',
          zIndex: 10,
          borderBottom: '1px solid #eaeaea'
        }}>
        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>
          👇 Scroll down slowly to see the color transition effect
        </p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          The text below will change from black to red as you scroll it out of
          view
        </p>
      </div>

      <div style={{ height: '40vh', marginBottom: '20px' }}>
        <ScrollColorTransition {...args} testId='default-scroll-color'>
          <div
            style={{
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef',
              marginBottom: '20px'
            }}>
            <Heading level={1} testId='color-heading-1'>
              Watch this text change color
            </Heading>

            <p style={{ fontSize: '18px', lineHeight: 1.6 }}>
              As you scroll down, this text will change from{' '}
              <strong>black</strong> to{' '}
              <strong style={{ color: '#ff0000' }}>red</strong>.
            </p>

            <div
              style={{
                height: '100px',
                backgroundColor: '#f8f9fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                marginTop: '20px',
                border: '1px solid #e9ecef'
              }}>
              <Heading level={2} testId='color-heading-2'>
                Part of the color transition
              </Heading>
            </div>
          </div>
        </ScrollColorTransition>
      </div>

      {/* Content outside of the ScrollColorTransition */}
      <div
        style={{
          padding: '30px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef',
          marginTop: '30px'
        }}>
        <Heading level={2} testId='non-color-transition-heading'>
          {"This content doesn't change color"}
        </Heading>
        <p>
          {
            "This component is outside of the ScrollColorTransition decorator. You've now scrolled past the color transition section completely."
          }
        </p>
      </div>
    </div>
  )
};

export const CustomColors: Story = {
  args: {
    threshold: 0.5,
    speed: 500,
    fromColor: '#0066ff',
    toColor: '#ff3300'
  },
  render: args => (
    <div style={{ height: '150vh', padding: '20px' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          padding: '10px',
          marginBottom: '20px',
          zIndex: 10,
          borderBottom: '1px solid #eaeaea'
        }}>
        <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>
          👇 Scroll down to see blue to red transition
        </p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          This example uses threshold: 0.5 (more gradual transition)
        </p>
      </div>

      <div style={{ height: '40vh', marginBottom: '20px' }}>
        <ScrollColorTransition {...args} testId='custom-color-transition'>
          <div
            style={{
              padding: '30px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
            <Heading level={1} testId='custom-color-heading'>
              Blue to Red Transition
            </Heading>
            <p style={{ fontSize: '18px', marginTop: '10px' }}>
              With a higher threshold (0.5), the color transition starts when
              more of this section is still visible, creating a more gradual
              effect. This example transitions from{' '}
              <strong style={{ color: '#0066ff' }}>blue</strong> to{' '}
              <strong style={{ color: '#ff3300' }}>red</strong>.
            </p>
            <div
              style={{
                height: '100px',
                backgroundColor: '#f8f9fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
                border: '1px solid #e9ecef'
              }}>
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Keep scrolling to see the full effect
              </p>
            </div>
          </div>
        </ScrollColorTransition>
      </div>

      <div
        style={{
          padding: '30px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef',
          marginTop: '30px'
        }}>
        <Heading level={2}>Non-transitioning content</Heading>
        <p>This content is outside the ScrollColorTransition component.</p>
      </div>
    </div>
  )
};

// Example with more striking visual contrast
export const HighContrast: Story = {
  args: {
    threshold: 0.2,
    speed: 300,
    fromColor: '#000000',
    toColor: '#00ff00' // Bright green
  },
  render: args => (
    <div
      style={{ height: '120vh', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          padding: '15px',
          marginBottom: '20px',
          zIndex: 10,
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
        <p style={{ fontWeight: 'bold', fontSize: '16px' }}>
          👇 Easy-to-see color transition (black to bright green)
        </p>
      </div>

      <div style={{ height: '30vh' }}>
        <ScrollColorTransition {...args} testId='high-contrast'>
          <div
            style={{
              padding: '25px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
            <Heading level={1} testId='high-contrast-heading'>
              HIGH CONTRAST EXAMPLE
            </Heading>
            <p style={{ fontSize: '20px', marginTop: '15px' }}>
              This example uses a lower threshold (0.2) for a more immediate
              color change and high contrast colors to make the effect more
              obvious.
            </p>
          </div>
        </ScrollColorTransition>
      </div>

      <div
        style={{
          padding: '25px',
          backgroundColor: 'white',
          borderRadius: '8px',
          marginTop: '30px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
        <Heading level={2}>Regular Text Color</Heading>
        <p>For comparison, this text maintains its original color.</p>
      </div>
    </div>
  )
};
