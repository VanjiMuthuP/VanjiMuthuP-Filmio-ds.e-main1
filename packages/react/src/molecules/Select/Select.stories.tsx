import React from 'react'
import Select from './Select'
import { withA11y } from '@storybook/addon-a11y'

// css
import '@ds.e/scss/lib/Select.css'

const options = [{
    label: 'Strict Black',
    value: 'black'
}, {
    label: 'Heavenly Green',
    value: 'green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}]

export default {
    title: 'Molecules|Select',
    decorators: [withA11y]
}

export const Common = () => <Select options={options} />

Common.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Fz43fSeKUqUuDzfngMNWM1/DS---Andalou?node-id=340%3A126"
  }
}

export const RenderOption = () =>
    <Select options={options} renderOption={({ getOptionRecommendedProps, option, isSelected }) => <span {...getOptionRecommendedProps()}>{option.label} {isSelected ? 'SELECTED !' : ''}</span>} />

    RenderOption.parameters = {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/Fz43fSeKUqUuDzfngMNWM1/DS---Andalou?node-id=340%3A126"
      }
    }
export const CustomLabel = () => <Select label='Select a color' options={options} />

CustomLabel.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Fz43fSeKUqUuDzfngMNWM1/DS---Andalou?node-id=340%3A126"
  }
}