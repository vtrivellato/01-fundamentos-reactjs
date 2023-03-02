declare module '*.css';
declare module '*.module.css';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.bmp';
declare module '*.gif';
declare module '*.ico';
declare module "*.svg" {
    const content: any;
    export default content;
}