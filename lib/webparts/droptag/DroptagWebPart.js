"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var sp_client_preview_1 = require('@microsoft/sp-client-preview');
var Droptag_module_scss_1 = require('./Droptag.module.scss');
var strings = require('droptagStrings');
var $ = require('jquery');
var dz = require('dropzone/dist/min/dropzone.min.js');
//put plugin-in css here and not in xx.module.scss.ts
require('dropzone/dist/min/dropzone.min.css');
var DroptagWebPart = (function (_super) {
    __extends(DroptagWebPart, _super);
    function DroptagWebPart(context) {
        _super.call(this, context);
    }
    DroptagWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + Droptag_module_scss_1.default.droptag + "\">\n        <div class=\"" + Droptag_module_scss_1.default.container + "\">\n          <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + Droptag_module_scss_1.default.row + "\">\n            <div class=\"ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1\">\n              <div id=\"my-awesome-dropzone\"></div>\n            </div>\n          </div>\n        </div>\n      </div>";
        $("#my-awesome-dropzone").dropzone({ url: "/file/post" });
    };
    Object.defineProperty(DroptagWebPart.prototype, "propertyPaneSettings", {
        get: function () {
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
                                    sp_client_preview_1.PropertyPaneTextField('description', {
                                        label: strings.DescriptionFieldLabel
                                    })
                                ]
                            }
                        ]
                    }
                ]
            };
        },
        enumerable: true,
        configurable: true
    });
    return DroptagWebPart;
}(sp_client_preview_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DroptagWebPart;

//# sourceMappingURL=DroptagWebPart.js.map
