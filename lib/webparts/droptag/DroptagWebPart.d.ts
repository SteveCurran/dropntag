import { BaseClientSideWebPart, IPropertyPaneSettings, IWebPartContext } from '@microsoft/sp-client-preview';
import { IDroptagWebPartProps } from './IDroptagWebPartProps';
export default class DroptagWebPart extends BaseClientSideWebPart<IDroptagWebPartProps> {
    constructor(context: IWebPartContext);
    render(): void;
    protected propertyPaneSettings: IPropertyPaneSettings;
}
