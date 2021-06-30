import * as React from "react";

import {
  Wrapper as ExtensionWrapper,
  useUiExtension,
  ExtensionDeclaration,
  FieldExtensionType,
  FieldExtensionFeature,
} from "@graphcms/uix-react-sdk";

const extensionDeclaration: ExtensionDeclaration = {
  extensionType: "field",
  name: "Social links",
  fieldType: FieldExtensionType.JSON,
  features: [FieldExtensionFeature.FieldRenderer],
};

export default function SocialLinksField({ extensionUid }) {
  console.log({ extensionUid });
  if (typeof extensionUid !== "string") return <p> missing extension UID</p>;
  return (
    <ExtensionWrapper uid={extensionUid} declaration={extensionDeclaration}>
      <SocialLinksInput />
    </ExtensionWrapper>
  );
}

/// ok let's make an extension out of this
function SocialLinksInput() {
  const { value, onChange } = useUiExtension();
  const fieldId = "social-links-field";
  const socialLinks = [
    "Instagram",
    "Facebook",
    "Twitter",
    "Tiktok",
    "YouTube",
    "Spotify",
    "Email",
    "Bandcamp",
    "Soundcloud",
    "Apple Music",
    "Website",
  ];

  return (
    <div className="socialLinks__root">
      {socialLinks.map((label) => (
        <fieldset className="socialLinks__field">
          <label htmlFor={label} className="socialLinks__field-label">
            {label}
          </label>
          <input
            id={label}
            value={value[label]}
            className="socialLinks__field-input"
            onChange={({ target: { value: val } }) =>
              // this needs throttling
              onChange({
                ...value,
                [label]: val,
              })
            }
          />
        </fieldset>
      ))}
    </div>
  );
}
