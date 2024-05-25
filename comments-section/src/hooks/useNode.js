import React from "react";

export const useNode = () => {
  const insertNode = function (tree, commentId, item) {
    if (tree.id === commentId) {
      tree.items.push({
        id: Date.now(),
        name: item,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, commentId, item);
    });

    return { ...tree, items: latestNode };
  };

  const editNode = function (tree, commentId, value) {
    if (tree.id === commentId) {
      tree.name = value;
      return tree;
    }

    tree.items.map((ob) => {
      return editNode(ob, commentId, value);
    });

    return { ...tree };
  };
  const deleteNode = function (tree, commentId) {
    for (let i = 0; i < tree.items.length; i++) {
      const current = tree.items[i];
      if (commentId === current.id) {
        tree.items.splice(i, 1);
        return tree;
      } else {
        deleteNode(current, commentId);
      }
    }
    return tree;
  };

  return { insertNode, editNode, deleteNode };
};
