## 🔘 CustomButton Component

A reusable, theme-aware button component built with **React** and **Material UI (MUI)**. Supports configurable background color, size, icons, and tooltips.

### ✨ Features

- Theme-based background colors: `primary`, `secondary`, `info`, `success`, `warning`, `error`
- Button sizes: `small`, `medium`, `large`
- Optional icons with customizable size and position
- Tooltip support on click with configurable position

### 🧩 Props

| Prop              | Type                                                                 | Default         | Description                             |
|-------------------|----------------------------------------------------------------------|-----------------|-----------------------------------------|
| `bgColor`         | `'primary'` \| `'secondary'` \| `'info'` \| `'success'` \| `'warning'` \| `'error'` | `'info'`        | Button color from MUI theme             |
| `buttonText`      | `string`                                                             | —               | Button label text                       |
| `icon`            | `React.ReactElement`                                                 | `undefined`     | Optional icon element                   |
| `iconPosition`    | `'left'` \| `'right'`                                                | `'left'`        | Icon position                           |
| `iconSize`        | `'small'` \| `'medium'` \| `'large'`                                 | `'medium'`      | Icon size                               |
| `iconBgColor`     | `string`                                                             | `'transparent'` | Icon background color                   |
| `size`            | `'small'` \| `'medium'` \| `'large'`                                 | `'medium'`      | Button size                             |
| `tooltipText`     | `string`                                                             | `''`            | Tooltip text shown on click             |
| `tooltipPosition` | `'top'` \| `'bottom'` \| `'left'` \| `'right'`                       | `'top'`         | Tooltip position                        |

### 🛠 Example Usage

```tsx
import { Send, Delete } from '@mui/icons-material';
import CustomButton from './components/custom-button';

<CustomButton
  bgColor="primary"
  buttonText="Send"
  icon={<Send />}
  iconPosition="right"
  iconSize="small"
  size="large"
  tooltipText="Send message"
  tooltipPosition="top"
/>

<CustomButton
  bgColor="warning"
  buttonText="Delete"
  icon={<Delete />}
  iconPosition="left"
  iconSize="large"
  tooltipText="Delete item"
  tooltipPosition="right"
/>
