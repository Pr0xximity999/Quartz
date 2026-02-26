---
tags:
  - school/robot-fleet
  - programming-languages/ROS
  - taal/engels
  - language/english
publish: "true"
---
# Ros2 workspace
Projects inside the Ros2 environment are called workspaces. A workspace is a directory with a specific folder structure, source code is usually placed inside the `src` directory.

# Initializing a workspace
Create a new folder using `mkdir -p [projectname]/src`. `-p` will recursively make any missing directory. Afterwards, run `colcon build` to create everything else.

It should look something like this:
```
├── build
│   └── COLCON_IGNORE
├── install
│   ├── COLCON_IGNORE
│   ├── local_setup.bash
│   ├── local_setup.ps1
│   ├── local_setup.sh
│   ├── _local_setup_util_ps1.py
│   ├── _local_setup_util_sh.py
│   ├── local_setup.zsh
│   ├── setup.bash
│   ├── setup.ps1
│   ├── setup.sh
│   └── setup.zsh
├── log
│   ├── build_2025-11-06_12-18-39
│   │   ├── events.log
│   │   └── logger_all.log
│   ├── COLCON_IGNORE
│   ├── latest -> latest_build
│   └── latest_build -> build_2025-11-06_12-18-39
└── src

```


# Running a built workspace
For this part, the [tutorial repo of ros](https://github.com/ros/ros_tutorials.git) will be used.

run `git clone https://github.com/ros/ros_tutorials.git -b jazzy` at the root of your `src` directory to clone this repository to the branch “jazzy”.

To ensure all missing dependencies are installed, run (also at the root of your workspace) `rosdep install -i --from-path src --rosdistro --jazzy -y && colcon build` to install and build a fully working workspace.
- `--from-path` tells the installer where to look for dependencies
- `--rosdistro` tells the installer what version of ros2 you use.

Everything should work now, run `ros2 launch turtlesim multisim.launch.py` and two windows showing turtles in a blue screen should appear.

![[Vault-data/Attachments/Ros2 development environment turtlesim.png]]<br>Like this :3

# Creating new packages
packages are a way to organize your workspace, both python and c++ packages work alongside each other.

To create a package, run `ros2 pkg create --build-type ament_cmake --node_name [nodename] [packagename]`.
- ``--build-type`` tells the packager what type of package to use, cmake is [[School/Year 2/S1/c++/Introduction C++|c++]].
- ``--node_name`` tells the packages what the node name is.
- `[packagename]` is a default parameter that gives the package a name.

# Fixing includes in Vscode
Vscode does not automatically import installed packages by ros2. To fix this, open up the `.vscode` directory (or create it if it doesn’t exist) in the root of your vscode window.

inside the directory, create the file named `c_cpp_properties.json`, and paste this text:
```json
{
    "configurations": [
        {
            "name": "Linux",
            "includePath": [
                "${workspaceFolder}/**",
                "/opt/ros/jazzy/include/**"
            ],
        }
    ],
    "version": 4
}
```

This *should* fix the intellisense issue and make give you autocomplete for ros2 imported packages :3. 