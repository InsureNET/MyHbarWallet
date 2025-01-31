import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueCompositionApi from "@vue/composition-api";
import VueI18n from "vue-i18n";

import InterfaceUploadFile from "../../../src/ui/views/InterfaceUploadFile.vue";
import i18n from "../../../src/service/i18n";

describe("InterfaceUploadFile.vue", (): void => {
    const localVue = createLocalVue();
    localVue.use(VueCompositionApi);
    localVue.use(VueI18n);

    it("renders", (): void => {
        expect.assertions(1);

        const wrapper = shallowMount(InterfaceUploadFile, {
            localVue,
            i18n
        });
        expect(wrapper).toMatchInlineSnapshot(`
            <interfaceform-stub title="Upload">
              <div class="upload-file">
                <uploadzone-stub filename="" class="upload"></uploadzone-stub>
                <div class="buttons">
                  <button-stub label="Upload File" disabled="true" class="upload-button"></button-stub>
                  <button-stub label="Upload File Hash" disabled="true"></button-stub>
                </div>
              </div>
              <modalfeesummary-stub state="[object Object]"></modalfeesummary-stub>
              <modaluploadprogress-stub state="[object Object]"></modaluploadprogress-stub>
              <modalsuccess-stub state="[object Object]">
                <i18n-stub path="modalSuccess.uploadedFile"><strong></strong></i18n-stub>
              </modalsuccess-stub>
            </interfaceform-stub>
        `);
    });
});
