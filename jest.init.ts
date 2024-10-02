import { config } from "@vue/test-utils";
import VueClickAway from "vue3-click-away";
import { createI18n } from 'vue-i18n';

// inline-svg stub
const InlineSvg = {
  template: "<img />",
};

config.global.stubs = {
  InlineSvg
};
config.global.plugins = [VueClickAway];

const messages = {
  en: {
    generalInstructions: {
      header: "General Instructions",
      timerInfo: "This test has a timer.",
      paletteInfo: "The question palette shows the status of the questions.",
    },
    answeringQuestion: {
      title: "Answering a Question",
      procedureForMCQ: "Follow these steps for MCQ questions.",
    },
  },
  hi: {
    generalInstructions: {
      header: "सामान्य निर्देश",
      timerInfo: "इस परीक्षा में एक टाइमर है।",
      paletteInfo: "प्रश्न पैलेट प्रश्नों की स्थिति दिखाता है।",
    },
    answeringQuestion: {
      title: "प्रश्न का उत्तर देना",
      procedureForMCQ: "एमसीक्यू के लिए इन चरणों का पालन करें।",
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

config.global.plugins.push(i18n);
