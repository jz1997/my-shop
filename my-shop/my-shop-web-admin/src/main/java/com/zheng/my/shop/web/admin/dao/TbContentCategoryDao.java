package com.zheng.my.shop.web.admin.dao;

import com.zheng.my.shop.domain.TbContentCategory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TbContentCategoryDao {
    /**
     * 查询全部内容
     * @return
     */
    List<TbContentCategory> selectAll();

    /**
     * 根据 Id 查询 TbContentCategory
     * @param
     * @return
     */
    TbContentCategory getById(Long id);

    /**
     * 根据 pid 查询内容
     * @param
     * @return
     */
    List<TbContentCategory> selectByPid(TbContentCategory tbContentCategory);

    /**
     * 插入 ContentCategory 记录
     * @param tbContentCategory
     */
    void insert(TbContentCategory tbContentCategory);

    /**
     * 更新 TbContentCategory 记录
     * @param tbContentCategory
     */
    void update(TbContentCategory tbContentCategory);

    /**
     * 根据 ID 删除 ContentCategory
     * @param tbContentCategory
     */
    void delete(TbContentCategory tbContentCategory);
}
