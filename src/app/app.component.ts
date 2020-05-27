import { Component } from '@angular/core';
import { Tree } from './models/tree';
import { TreeNode } from './models/tree-models';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  tree: Tree<string>;

  ngOnInit() {
    this.initTreeData();
  }

  initTreeData() {
    let tree = new Tree<string>("root-node-data");
    let root: TreeNode = tree.getRoot()
    for(let i = 0; i < 10; i++) {
      let node: TreeNode<string> = new TreeNode("First Level Node " + i, root);
      root.addChild(node);

      for(let j = 0; j < 3; j++) {
        let innerNode: TreeNode<string> = new TreeNode("Second Level Node " + i + ":" + j, node);
        node.addChild(innerNode);
        
        let innerNode2: TreeNode<string> = new TreeNode("Third Level Node " + i + ":" + j + ":0", innerNode);
        innerNode.addChild(innerNode2)
      }

    }
    this.tree = tree;
  }
}
