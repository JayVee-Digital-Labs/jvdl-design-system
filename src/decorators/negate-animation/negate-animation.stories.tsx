import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NegateAnimation from './negate-animation';
import { ScrollFadeOut } from '@/decorators/scroll-fade-out/scroll-fade-out';
import Heading from '@/elements/heading/heading';

const meta: Meta<typeof NegateAnimation> = {
  title: 'Decorators/NegateAnimation',
  component: NegateAnimation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A decorator component that prevents animations from being applied to its child elements when nested inside an animation transition decorator.'
      }
    }
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom class name to apply to the container',
      defaultValue: ''
    },
    fixed: {
      control: 'boolean',
      description:
        'Whether the element should stick to a fixed position when scrolling',
      defaultValue: false
    },
    fixedPosition: {
      control: { type: 'select', options: ['top', 'bottom'] },
      description: 'Position where the element should stick when fixed is true',
      defaultValue: 'top'
    },
    fixedOffset: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Offset from the fixedPosition in pixels',
      defaultValue: 0
    },
    fixedThreshold: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Scroll threshold (%) at which the element becomes fixed',
      defaultValue: 0
    }
  }
};

export default meta;
type Story = StoryObj<typeof NegateAnimation>;

export const Default: Story = {
  args: {
    fixed: false
  },
  render: args => (
    <div style={{ height: '150vh', padding: '20px' }}>
      <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>
        👇 Scroll down to see the fade-out effect
      </p>

      <div style={{ height: '50vh', marginBottom: '20px' }}>
        <ScrollFadeOut threshold={0.5} duration={300} testId='scroll-fade-out'>
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

            <NegateAnimation {...args} testId='negate-animation'>
              <div
                style={{
                  backgroundColor: '#e6f7ff',
                  padding: '15px',
                  border: '2px dashed #ff0000',
                  marginTop: '20px'
                }}>
                <Heading level={2} testId='no-fade-heading'>
                  This content will NOT fade out
                </Heading>
                <p>
                  This text should remain fully visible even when scrolling.
                </p>
              </div>
            </NegateAnimation>

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
                This will fade out again
              </Heading>
            </div>
          </div>
        </ScrollFadeOut>
      </div>
    </div>
  )
};

export const HeroBannerNavigation: Story = {
  args: {
    fixed: true,
    fixedPosition: 'top',
    fixedOffset: 0
  },
  render: args => (
    <div style={{ height: '300vh' }}>
      <div style={{ position: 'relative', height: '70vh' }}>
        <ScrollFadeOut threshold={0.3} duration={500} testId='hero-fade-out'>
          <div
            style={{
              height: '70vh',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundSize: 'cover',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Heading level={1} testId='hero-title'>
              Hero Banner Content
            </Heading>

            <NegateAnimation {...args} testId='nav-negate'>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  padding: '10px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                <div style={{ fontWeight: 'bold', fontSize: '24px' }}>Logo</div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <a href='#' style={{ textDecoration: 'none', color: '#333' }}>
                    Home
                  </a>
                  <a href='#' style={{ textDecoration: 'none', color: '#333' }}>
                    About
                  </a>
                  <a href='#' style={{ textDecoration: 'none', color: '#333' }}>
                    Contact
                  </a>
                </div>
              </div>
            </NegateAnimation>
          </div>
        </ScrollFadeOut>
      </div>

      <div style={{ padding: '40px 20px' }}>
        <Heading level={2}>Page Content</Heading>
        <p style={{ marginTop: '20px', fontSize: '18px', lineHeight: 1.6 }}>
          Scroll up and down to see how the hero image fades out while the
          navigation stays fixed.
        </p>

        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div key={i} style={{ marginTop: '40px' }}>
              <Heading level={3}>Section {i + 1}</Heading>
              <p style={{ marginTop: '10px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl,
                eget ultricies nisl nisl eget nisl.
              </p>
            </div>
          ))}
      </div>
    </div>
  )
};
