package com.example.replaceWindowFilePathAsLinux.controller;

import com.example.replaceWindowFilePathAsLinux.dto.PathDto;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PathController {

    @GetMapping("/")
    public String pathHome(@ModelAttribute PathDto pathDto, Model model){
        System.out.println("pathDto = " + pathDto.toString());
        if (pathDto.getWindowPath() == null) {
            pathDto.setWindowPath("");
        }

        String linuxPath = pathDto.getWindowPath().replace("\\", "/");
        pathDto.setLinuxPath(linuxPath);
        model.addAttribute("pathDto", pathDto);
        return "path-home";
    }

    @PostMapping("/")
    public String postPathHome(@ModelAttribute PathDto pathDto, Model model){
        System.out.println("pathDto = " + pathDto.toString());

        if (pathDto.getWindowPath() == null) {
            pathDto.setWindowPath("");
        }

        String linuxPath = pathDto.getWindowPath().replace("\\", "/");
        pathDto.setLinuxPath(linuxPath);
        model.addAttribute("pathDto", pathDto);
        return "path-home";
    }
}
