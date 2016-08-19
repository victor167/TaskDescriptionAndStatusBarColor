function TaskDescriptionColor() {
}

TaskDescriptionColor.prototype.setColor = function (colorTask, colorStatus, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "TaskDescriptionColor", "setColor", [colorTask,colorStatus]);
};

TaskDescriptionColor.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.TaskDescriptionColor = new TaskDescriptionColor();
  return window.plugins.TaskDescriptionColor;
};

cordova.addConstructor(TaskDescriptionColor.install);