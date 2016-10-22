import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-client-preview';

import styles from './Droptag.module.scss';
import * as strings from 'droptagStrings';
import { IDroptagWebPartProps } from './IDroptagWebPartProps';
import * as $ from 'jquery';
var dz = require('dropzone/dist/min/dropzone.min.js');



//put plugin-in css here and not in xx.module.scss.ts
require('dropzone/dist/min/dropzone.min.css');

export default class DroptagWebPart extends BaseClientSideWebPart<IDroptagWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.droptag}">
        <div class="${styles.container}">
          <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">
            <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <div id="my-awesome-dropzone"></div>
            </div>
          </div>
        </div>
      </div>`;

    $("#my-awesome-dropzone").dropzone({ url: "/file/post" });


  }

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
