import { lazy } from "react";

const iconCache = {};

const createIconComponent = (iconModule, iconName) => {
    const IconComponent = iconModule[iconName];
    if (!IconComponent) {
        console.warn(`Icon ${iconName} not found, using fallback`);
        return { default: iconModule.FaQuestionCircle || (() => null) };
    } return { default: IconComponent};
};

export const loadIcon = (iconName: string, library: string) => {
    const cacheKey = `${library}-${iconName}`;
    if (iconCache[cacheKey]) return iconCache[cacheKey];
    const LazyIcon = lazy(async () => {
        switch (library) {
            case 'fa': return import('react-icons/fa').then(module => createIconComponent(module, iconName));
            case 'fa6': return import('react-icons/fa6').then(module => createIconComponent(module, iconName));
            case 'io': return import('react-icons/io').then(module => createIconComponent(module, iconName));
            case 'io5': return import('react-icons/io5').then(module => createIconComponent(module, iconName));
            case 'md': return import('react-icons/md').then(module => createIconComponent(module, iconName));
            case 'bi': return import('react-icons/bi').then(module => createIconComponent(module, iconName));
            case 'tb': return import('react-icons/tb').then(module => createIconComponent(module, iconName));
            case 'ri': return import('react-icons/ri').then(module => createIconComponent(module, iconName));
            case 'gr': return import('react-icons/gr').then(module => createIconComponent(module, iconName));
            case 'bs': return import('react-icons/bs').then(module => createIconComponent(module, iconName));
            default: console.error(`Unknown icon library: ${library}`);
                return import('react-icons/fa').then(module => createIconComponent(module, 'QuestionCircle'));

        }
    });
    iconCache[cacheKey] = LazyIcon;
    return LazyIcon;
};
