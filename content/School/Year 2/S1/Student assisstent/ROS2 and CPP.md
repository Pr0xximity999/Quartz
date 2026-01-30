---
tags:
  - school/student-assistent
  - taal/engels
  - language/english
publish: "true"
---
>[!important] source
>https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Cpp-Service-And-Client.html

# Create workspace
```bash
mkdir -r ~/cpp_ws/src
cd ~/cpp_ws/src
```

# Create package
Add other dependencies if needed
```bash
ros2 pkg create --build-type ament_cmake <PACKAGE_NAME> --dependencies rclcpp
```