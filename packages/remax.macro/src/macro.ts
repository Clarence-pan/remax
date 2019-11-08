import * as React from 'react';
import { NodePath } from '@babel/traverse';
import { createMacro } from 'babel-plugin-macros';
import createHostComponentMacro from './createHostComponent';

function remax({
  references,
  state,
}: {
  references: { [name: string]: NodePath[] };
  state: any;
}) {
  if (references.createHostComponent) {
    references.createHostComponent.forEach(path =>
      createHostComponentMacro(path, state)
    );
  }
}

export declare function createHostComponent<P = any>(
  name: string,
  props: string[]
): React.ComponentType<P>;

export default createMacro(remax);