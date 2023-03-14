import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Badge } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Badge

export default {
    title: `${COMPONENT_PREFIX}/Badge`,
    component: Badge,
    argTypes: {
        id: { control: 'text', description: "A unique identifier" },
        rounded: { control: 'boolean', defaultValue: false, description: "Makes the Badge rounded" },
        onRemove: {action: 'onRemove', description: "Event triggered when removing a Badge"},
        className: {control: 'text', description: "Container Class"},
        onClick: { action: 'clicked', description: "Event triggered when clicking a Badge" },
        style: { control: 'object', description: "CSS Style Object" },
    },
    parameters: { controls: { exclude: ['type'] } },
} as ComponentMeta<ComponentType>;


const Template: ComponentStory<ComponentType> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: "primary",
    children: "Primary"
}

export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary",
    children: "Secondary"
};

export const Light = Template.bind({});
Light.args = {
    type: "light",
    children: "Light"
};

export const Warning = Template.bind({});
Warning.args = {
    type: "warning",
    children: "Warning"
};

export const Danger = Template.bind({});
Danger.args = {
    type: "danger",
    children: "Danger"
};

export const Info = Template.bind({});
Info.args = {
    type: "info",
    children: "Info"
};

export const Success = Template.bind({});
Success.args = {
    type: "success",
    children: "Success"
};

export const Link = Template.bind({});
Link.args = {
    type: "link",
    children: "Link"
};

export const Dark = Template.bind({});
Dark.args = {
    type: "dark",
    children: "Dark"
};