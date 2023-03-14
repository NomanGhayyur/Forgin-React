import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar, Icon, IconSets } from '../../lib/components';
import { COMPONENT_PREFIX } from '../helper/constant';

type ComponentType = typeof Avatar;

export default {
    title: `${COMPONENT_PREFIX}/Avatar`,
    component: Avatar,
    args: {
        style: {height: "5rem", width: '5rem', fontSize: "2rem"},
    },
    argTypes: {
        id: { control: 'text',description: "A unique identifier" },
        style: { control: 'object', description: "CSS Style Object" },
        className: {control: 'text', description: "Container Class"},
        size: {control: 'text', description: "A uniform size supplied to help pre-render Image"}
    },
    parameters: { controls: { exclude: ['type'] } }
} as ComponentMeta<ComponentType>;


const Template: ComponentStory<ComponentType> = (args) => <Avatar {...args} />;

export const WithName = Template.bind({});
WithName.args = {
    name: "Forgin React",
}
WithName.argTypes = {
    name: {control: 'text', description: "Generate Avatar by User's name"}
}

export const WithImage = Template.bind({});
WithImage.args = {
    src: require('../data/Luffy.jpg'),
    canPreview: false,
};
WithImage.argTypes = {
    src: {control: 'text', description: "A source URL to display HTML Image"},
    canPreview: { control: 'boolean', defaultValue: false, description: "Allow user to preview image when clicked" },
};

export const WithIcon = Template.bind({});
WithIcon.args= {
    iconName: "people",
}
WithIcon.argTypes = {
    iconName: { control: "select", options: IconSets, description: "Set of icons supported" },
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    name: "Forgin React",
    children: (
        <Icon name="pencil" style={{position:'absolute', bottom: 2, right: 2}}/>
    )
};