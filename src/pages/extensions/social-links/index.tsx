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

  return (
    <div>
      <label htmlFor={fieldId}>Social links</label>
      <textarea id={fieldId} onChange={onChange}>
        {value}
      </textarea>
    </div>
  );
}
