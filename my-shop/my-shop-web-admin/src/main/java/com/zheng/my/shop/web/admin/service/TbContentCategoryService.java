package com.zheng.my.shop.web.admin.service;

import com.zheng.my.shop.domain.TbContentCategory;

import java.util.List;

/**
 * 内容分类服务接口
 */
public interface TbContentCategoryService {
    List<TbContentCategory> selectAll();

    TbContentCategory getById(Long id);
    /**
     * 根据 pid 查询所有子节点
     * @param pid
     * @return
     */
    List<TbContentCategory> selectByPid(Long pid);
}
