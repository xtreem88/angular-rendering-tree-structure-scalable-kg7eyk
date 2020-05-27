import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Tree } from '../models/tree';
import {TreeNode} from '../models/tree-models';

@Component({
  selector: 'app-tree-parent',
  templateUrl: './tree-parent.component.html',
  styleUrls: ['./tree-parent.component.css']
})
export class TreeParentComponent implements OnInit {

  @Input()
  tree: Tree<string>;

  flatTree: TreeNode[];

  treeNode: TreeNode;

  ngOnChanges(changes: SimpleChanges) {
    if(changes['tree'] && this.tree != null) {
      this.treeNode = this.tree.getRoot();
      this.flatTree = this.tree.getFlatTree();
    }
  }

  constructor() { }

  ngOnInit() {}


}