---
tags:
  - school/student-assistent
  - taal/engels
  - language/english
---
# Create workspace
```bash
mkdir -p ~/tutorial_ws/src
cd ~/tutorial_ws
colcon build
echo "source ~/tutorial_ws/install/setup.bash" >> ~/.bashrc
ros2 pkg create tutorial_description
cd tutorial_description
rm -r include/ src/
mkdir urdf launch rviz
```

# Edit CmakeList.txt
```cmake
cmake_minimum_required(VERSION 3.8)

project(tutorial_description)

  

if(CMAKE_COMPILER_IS_GNUCXX OR CMAKE_CXX_COMPILER_ID MATCHES "Clang")

add_compile_options(-Wall -Wextra -Wpedantic)

endif()

  

# find dependencies

find_package(ament_cmake REQUIRED)

  

install(

DIRECTORY launch rviz urdf

DESTINATION share/${PROJECT_NAME}

)

  

ament_package()
```

```bash
cd ~/tutorial_ws/
colcon build
```
