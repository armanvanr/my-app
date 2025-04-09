import { Button, Tooltip  } from '@mui/material';
import React from 'react';
import { isValidElement, cloneElement } from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';



interface CustomButtonProps {
  bgColor: 'info' | 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  buttonText: string;
  icon?: React.ReactElement;
  iconBgColor?: string;
  iconPosition?: 'left' | 'right';
  iconSize?: 'small' | 'medium' | 'large';
  size?: 'small' | 'medium' | 'large';
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  tooltipText?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  bgColor = 'info',
  buttonText,
  icon,
  iconBgColor = 'transparent',
  iconPosition = 'left',
  iconSize = 'medium',
  size = 'medium',
  tooltipPosition = 'top',
  tooltipText = ''
}) => {

  const iconElement = isValidElement(icon)
  ? cloneElement(icon as React.ReactElement<SvgIconProps>, {
      fontSize: iconSize,
      sx: {
        backgroundColor: iconBgColor,
        borderRadius: '50%'
      },
    })
  : undefined;

  return (
    <>
      <Tooltip title={tooltipText} placement={tooltipPosition}>
        <Button
          color={bgColor}
          endIcon={iconPosition === 'right' ? iconElement : undefined}
          startIcon={iconPosition === 'left' ? iconElement : undefined}
          size={size}
          variant="contained"
        >
          {buttonText}
        </Button>
      </Tooltip>
    </>
  );
};

export default CustomButton;